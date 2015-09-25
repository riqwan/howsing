class ListingSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :area, :property_type, :bedrooms, :furnishing_state,
             :bathrooms, :balconies, :build_up_area, :price, :deposit, :user_id, :is_shortlisted

  def is_shortlisted
    Shortlist.find_by(listing_id: object.id, user_id: scope.id).present?
  end

  has_many :shortlists
end
