class User < ActiveRecord::Base
  enum role: [ :landlord, :customer ]

  has_many :shortlists, dependent: :destroy
  has_many :listings, dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
