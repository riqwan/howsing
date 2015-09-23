class ShortlistsController < ApplicationController
  def index
    @listing = Listing.find(params[:id])
    @shortlists = @listing.shortlists
    render json: @shortlist
  end

  def show
    @shortlist = Shortlist.find(params[:id]);

    render json: @shortlist
  end

  def create
    listing = Listing.find(params[:shortlist][:listing_id])
    user = User.find(params[:shortlist][:user_id])

    @shortlist = Shortlist.create(listing: listing, user: user)
    render json: @shortlist
  end

  def destroy
    @shortlist = Shortlist.find(params[:id]).destroy
    render json: @shortlist
  end
end
