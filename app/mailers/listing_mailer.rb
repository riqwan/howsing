class ListingMailer < ApplicationMailer
  def contact(listing, current_user)
    @listing = listing
    @user = listing.user
    @current_user = current_user

    mail(to: @user.email, from: @current_user.email, subject: 'Interested in your listing')
  end
end
