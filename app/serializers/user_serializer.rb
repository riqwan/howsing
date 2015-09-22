class UserSerializer < ActiveModel::Serializer
  attributes :id, :token

  def token
    'SDFSDFSIDFSDF234'
  end
end
