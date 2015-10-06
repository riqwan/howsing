class UserSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :email, :is_landlord
  has_many :shortlists, root: :user_shortlists, key: :user_shortlist_ids

  def is_landlord
    object.landlord?
  end
end
