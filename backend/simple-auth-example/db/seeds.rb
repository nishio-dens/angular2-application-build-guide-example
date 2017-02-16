tasks = [
  {
    id: 1,
    name: 'Create Angular Auth Example',
    description: 'Something...',
  },
  {
    id: 2,
    name: 'Create Crud example',
    description: 'Something...',
  }
]

tasks.each do |t|
  Task.create(t) unless Task.exists?(t[:id])
end

users = [
  {
    id: 1,
    provider: 'email',
    password: 'password',
    name: 'admin',
    nickname: 'admin',
    email: 'admin@densan-labs.net'
  }
]

users.each do |t|
  User.create(t) unless User.exists?(t[:id])
end
