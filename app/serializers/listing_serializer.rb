class ListingSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :area, :property_type, :bedrooms, :furnishing_state,
             :bathrooms, :balconies, :build_up_area, :price, :deposit, :user_id

  has_one :shortlist

  def shortlist
    scope.shortlists.find_by(listing: object)
  end
end
