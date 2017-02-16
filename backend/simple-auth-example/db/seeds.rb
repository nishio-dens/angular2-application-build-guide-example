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
  Task.create(t)
end
