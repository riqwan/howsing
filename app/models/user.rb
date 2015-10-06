class User < ActiveRecord::Base
  enum role: [ :landlord, :customer ]

  has_many :shortlists, dependent: :destroy
  has_many :listings, dependent: :destroy
  has_many :user_shortlists, through: :shortlists, source: :listing
  # has_many :shortlisted_properties, through: :shortlists, source: :listing
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
