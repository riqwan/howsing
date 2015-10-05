class UserSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :email, :is_landlord, :shortlist_listings_ids

  def is_landlord
    object.landlord?
  end

  def shortlist_listings_ids
    scope.shortlists.map {|shortlist| shortlist.id}
  end
end
