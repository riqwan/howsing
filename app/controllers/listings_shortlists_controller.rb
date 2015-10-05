class ListingsShortlistsController < ApplicationController
  def create
    listing = Listing.find(listing_shortlists_params[:listing_id])

    @listing_shortlist = current_user.shortlists.create(listing: listing)

    render json: @listing_shortlist, scope: current_user
  end

  def destroy

  end
end
