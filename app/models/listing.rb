class Listing < ActiveRecord::Base
  belongs_to :user
  has_many :shortlists, dependent: :destroy
end
