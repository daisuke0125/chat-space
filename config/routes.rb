Rails.application.routes.draw do
  devise_for :users
  root 'messages#index' #top画面
  get 'users' => 'users#edit' #アカウント編集画面
  post 'users' => 'sign_in' #ログイン画面
  post 'users' => 'sign_up' #新規登録画面
  post 'groups' => 'new' #グループ作成画面
end
  