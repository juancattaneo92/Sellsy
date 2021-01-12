Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only:[:new, :create, :destroy]
    resources :users 
    resources :categories, only: [:index]
    resources :reviews
    resources :cart_items, only: [:index, :show, :create, :update, :destroy]
    resources :products, only:[:index, :show] do 
      resources :reviews , only:[:index, :create]
      collection do
        get :search, to: "products#search", as: "search"
      end
    end 

  end

  root to: "static_pages#root"
end
