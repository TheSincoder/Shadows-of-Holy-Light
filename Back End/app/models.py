from app import db, login
from flask_login import UserMixin # This is just for the User Model!
from datetime import datetime as dt
from werkzeug.security import generate_password_hash, check_password_hash


class UserCharJoin(db.Model):
    character_id = db.Column(db.Integer, db.ForeignKey('character.id'), primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)

    def remove(self):
        db.session.delete(self)
        db.session.commit()

class User(UserMixin, db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150))
    first_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150))
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(200))
    created_on = db.Column(db.DateTime, default = dt.utcnow)
    wins = db.Column(db.Integer, default = 0)
    losses = db.Column(db.Integer, default = 0)
    battles = db.Column(db.Integer, default = 0 )
    user_character = db.relationship(
        'Character',
        secondary = 'user_char_join',
        backref= 'users',        
        lazy='dynamic'
    )


    def __repr__(self):
        return f'<User: {self.id} | {self.email}>'
    #salts and hashes our password to make it hard to steal
    def hash_password(self, original_password):
        return generate_password_hash(original_password)
    # compares the user password to the password provided in the login form
    def check_hashed_password(self, login_password):
        return check_password_hash(self.password, login_password)

    def from_dict(self, data):
        self.username = data['username']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = self.hash_password(data['password'])
        self.wins = 0
        self.losses = 0

    # saves the user to the database
    def save(self):
        db.session.add(self) # add the user to the db session
        db.session.commit() # save everyuthing in the session to the database

@login.user_loader
def load_user(id):
    return User.query.get(int(id))

class CharItemJoin(db.Model):
    character_id = db.Column(db.Integer, db.ForeignKey('character.id'), primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey('item.id'), primary_key=True)

    def remove(self):
        db.session.delete(self)
        db.session.commit()

class Character(db.Model):
    __tablename__ = 'character'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    race = db.Column(db.String(50))
    char_class = db.Column(db.String(50))
    hp = db.Column(db.Integer)
    defense = db.Column(db.Integer)
    attack = db.Column(db.Integer)
    weapon = db.Column(db.String(50))
    off_hand = db.Column(db.String(50))
    armor = db.Column(db.Integer)
    unit = db.Column(db.Integer)
    character_item = db.relationship(
        'Item',
        secondary = 'char_item_join',
        backref= 'characters',        
        lazy='dynamic'
    )
    
class Item(db.Model):
    __tablename__ = 'item'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    desc = db.Column(db.String(50))
