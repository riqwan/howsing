class ShortlistSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :listing_id, :checked

  def checked
    scope.shortlists.find_by(listing_id: object.listing_id).present?
  end
end
