Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only:[:new, :create, :destroy]
    resources :users 
    resources :categories
    resources :reviews, only: [:show, :update, :destroy]
    resources :cart_items, only: [:index, :show, :create, :destroy] do
      resources :products, only: [:index]
    end 

    resources :products, only:[:index, :show] do 
      resources :reviews
      collection do
        get :search, to: "products#search", as: "search"
      end
    end 

  end

  root to: "static_pages#root"
end
