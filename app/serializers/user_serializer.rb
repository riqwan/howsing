class UserSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :token, :email

  has_many :shortlists
  has_many :listings

  def token
    'SDFSDFSIDFSDF234'
  end
end
