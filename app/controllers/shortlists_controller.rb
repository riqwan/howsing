class ShortlistsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_listing, only: [:index, :create]
  before_action :set_shortlist, only: [:show, :destroy]
  before_action :ensure_shortlist_owner, only: [:destroy]

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
    @shortlist = Shortlist.new(listing: @listing, user: current_user)

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

  def set_listing
    @listing = Listing.find(params[:shortlist][:listing_id])
  end

  def set_shortlist
    @shortlist = current_user.shortlists.find_by(id: params[:id])
  end

  def ensure_shortlist_owner
    current_user.shortlists.find_by(id: @shortlist.id).present?
  end
end
