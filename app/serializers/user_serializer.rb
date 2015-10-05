class UserSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :email, :is_landlord

  def is_landlord
    object.landlord?
  end
end
