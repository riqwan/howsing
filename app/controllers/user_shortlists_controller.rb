class UserShortlistsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_shortlists

  def index
    render json: @shortlists, each_serializer: UserShortlistSerializer
  end

  def show
    @shortlist = @shortlists.find_by(id: params[:id])

    render json: @shortlist, serializer: UserShortlistSerializer
  end

  private

  def set_shortlists
    @shortlists = current_user.shortlists
  end
end
