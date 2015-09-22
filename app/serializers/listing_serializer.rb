class ListingSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :user_id, :area, :property_type, :bedrooms, :furnishing_state,
             :bathrooms, :balconies, :build_up_area, :price, :deposit

  has_many :shortlists
end
