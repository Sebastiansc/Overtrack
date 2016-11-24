# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161124065558) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "heroes", force: :cascade do |t|
    t.integer  "player_id",  null: false
    t.string   "name",       null: false
    t.integer  "play_time",  null: false
    t.text     "image",      null: false
    t.integer  "percentage", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players", force: :cascade do |t|
    t.string   "username",    null: false
    t.integer  "level",       null: false
    t.text     "avatar",      null: false
    t.text     "level_frame", null: false
    t.text     "star",        null: false
    t.text     "quick",       null: false
    t.text     "competitive", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "player_tag",  null: false
  end

end
