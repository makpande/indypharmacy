class ApplicationController < ActionController::API
  before_action :allow_cross_origin_requests, if: proc { Rails.env.development? }
  before_action :authenticate_request, only: [:current_user]

   def preflight
     render nothing: true
   end

   #allows for requests sent via OPTIONS as a result of CORs

   def current_user
     render json: @current_user, only: [:handle]
   end

   # embeds user handle info taken from Twitter auth into React app state

   def index
     render file: 'public/index.html'
   end

  #  handles issues with routing directly to page handled by RouteHandler
 private
   def allow_cross_origin_requests
     headers['Access-Control-Allow-Origin'] = '*'
     headers['Access-Control-Request-Method'] = '*'
     headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
     headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
     headers['Access-Control-Max-Age'] = '1728000'
   end

   # allows for CORs between Rails API and React app

   def authenticate_request
     begin
       uid = JWT.decode(request.headers['Authorization'], Rails.application.secrets.secret_key_base)[0]['uid']
       @current_user = User.find_by(uid: uid)
     rescue JWT::DecodeError
       render json: 'authentication_failed', status: 401
     end
   end

   # must run before current_user, but not before preflight.  In private because method can be reused in child components

end
