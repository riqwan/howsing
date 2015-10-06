class UserShortlistsController < ApplicationController
  before_action :authenticate_user!

  def index
    @shortlists = current_user.shortlists

    render json: @shortlists, each_serializer: UserShortlistSerializer
  end

  def show
    @shortlist = current_user.shortlists.find_by(id: params[:id])

    render json: @shortlist, serializer: UserShortlistSerializer
  end
end
