class ShortlistsController < ApplicationController
  before_action :authenticate_user!

  def index
    hash = {
      listing_id: params[:listing_id]
    }
    if params[:user_id].blank?
      @listing = Listing.find(params[:listing_id])
      @shortlists = @listing.shortlists
    else
      hash[:user_id] = params[:user_id]
      @shortlists = Shortlist.where(hash)
    end

    render json: @shortlists
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
