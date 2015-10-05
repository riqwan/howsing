class Shortlist < ActiveRecord::Base
  belongs_to :listing
  belongs_to :user

  validates_uniqueness_of :user_id, scope: :listing_id
end
