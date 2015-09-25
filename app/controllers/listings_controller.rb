class ListingsController < ApplicationController
  before_action :set_listing, only: [:show, :update, :destroy]

  def index
    @listings = Listing.all

    render json: @listings, scope: current_user
  end

  def show
    render json: @listing
  end

  def create
    @listing = Listing.create(listing_params)

    render json: @listing
  end

  def update
    @listing.update_attributes(listing_params)
  end

  def destroy
    @listing = @listing.destroy

    render json: @listing
  end

  def listing_params
    params.require(:listing).permit(
      :user_id, :area, :property_type, :bedrooms, :furnishing_state,
      :bathrooms, :balconies, :build_up_area, :price, :deposit
    )
  end

  def sanitized_params

  end

  def set_listing
    @listing = Listing.find(params[:id])
  end
end
