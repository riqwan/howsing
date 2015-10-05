class UserSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :email, :is_landlord, :listing_ids

  def is_landlord
    object.landlord?
  end

  def listing_ids
    scope.shortlists.map {|shortlist| shortlist.id}
  end
end
