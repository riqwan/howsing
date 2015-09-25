class UserSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :email, :is_landlord

  has_many :shortlists
  has_many :listings

  def is_landlord
    object.landlord?
  end
end
