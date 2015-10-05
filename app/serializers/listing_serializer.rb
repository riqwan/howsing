class ListingSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :area, :property_type, :bedrooms, :furnishing_state,
             :bathrooms, :balconies, :build_up_area, :price, :deposit, :user_id,
             :listing_shortlist_id

  def is_shortlisted
    Shortlist.find_by(listing_id: object.id, user_id: scope.id).present?
  end

  def listing_shortlist_id
    shortlist = scope.shortlists.find_by(listing_id: object.id)

    shortlist.present? ? shortlist.id : nil
  end
end
