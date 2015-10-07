class ShortlistsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_listing, only: [:index, :create]
  before_action :set_shortlist, only: [:show, :destroy]

  def index
    @shortlists = @listing.try(:shortlists)

    render json: @shortlists
  end

  def show
    if @shortlist.present?
      render json: @shortlist, scope: current_user
    else
      render json: { message: 'Shortlist doesnt exist' }, status: 402
    end
  end

  def create
    @shortlist = current_user.shortlists.new(listing: @listing)

    if @shortlist.save
      render json: @shortlist, scope: current_user
    else
      render json: { errors: @shortlist.errors }, status: 422
    end
  end

  def destroy
    if @shortlist.destroy
      render json: @shortlist, scope: current_user
    else
      render json: { errors: @shortlist.errors }, status: 422
    end
  end

  private

  def shortlist_params
    params.require(:shortlist).permit(:listing_id)
  end

  def set_listing
    @listing = Listing.find(shortlist_params[:listing_id])
  end

  def set_shortlist
    @shortlist = current_user.shortlists.find_by(id: params[:id])
  end
end
