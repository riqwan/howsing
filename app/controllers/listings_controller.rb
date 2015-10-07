class ListingsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_listing, only: [:update, :destroy, :send_email]
  before_action :ensure_landlord!, only: [:create, :update, :destroy]

  def index
    @listings = Listing.all

    render json: @listings, scope: current_user
  end

  def show
    @listing = Listing.find(params[:id])

    if @listing.present?
      render json: @listing
    else
      render json: { message: 'Listing doesnt exist' }, status: 402
    end
  end

  def create
    @listing = current_user.listings.new(listing_params)

    if @listing.save
      render json: @listing
    else
      render json: { errors: @listing.errors }, status: 422
    end
  end

  def update
    if @listing.update_attributes(listing_params)
      render json: @listing
    else
      render json: { errors: @listing.errors }, status: 422
    end
  end

  def destroy
    if @listing.destroy
      render json: @listing
    else
      render json: { errors: @listing.errors }, status: 422
    end
  end

  def send_email
    listing = Listing.find(params[:id])

    ListingMailer.contact(listing, current_user).deliver_now

    render json: { message: 'email sent successfully' }
  end

  def listing_params
    params.require(:listing).permit(
      :user_id, :area, :property_type, :bedrooms, :furnishing_state,
      :bathrooms, :balconies, :build_up_area, :price, :deposit
    )
  end

  def ensure_landlord!
    if !current_user.landlord?
      render json: { message: 'User is not allowed to create a listing' }, status: 401
    end
  end

  def set_listing
    @listing = current_user.listings.find_by(id: params[:id])
  end
end
