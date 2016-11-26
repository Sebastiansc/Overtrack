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

ActiveRecord::Schema.define(version: 20161126050437) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "hstore"

  create_table "matches", force: :cascade do |t|
    t.string   "region",         null: false
    t.string   "match_type",     null: false
    t.integer  "match_id",       null: false
    t.bigint   "match_creation", null: false
    t.hstore   "participants",   null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["participants"], name: "index_matches_on_participants", using: :gist
  end

  create_table "matchings", force: :cascade do |t|
    t.integer  "summoner_id", null: false
    t.integer  "match_id",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["summoner_id", "match_id"], name: "index_matchings_on_summoner_id_and_match_id", unique: true, using: :btree
  end

  create_table "spells", force: :cascade do |t|
    t.string   "image_name",  null: false
    t.string   "name",        null: false
    t.integer  "spell_id",    null: false
    t.integer  "cool_down",   null: false
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["spell_id"], name: "index_spells_on_spell_id", unique: true, using: :btree
  end

  create_table "summoners", force: :cascade do |t|
    t.string   "name",          null: false
    t.integer  "level",         null: false
    t.integer  "summoner_id",   null: false
    t.integer  "profile_icon",  null: false
    t.string   "tier",          null: false
    t.integer  "wins",          null: false
    t.integer  "loses"
    t.integer  "league_points", null: false
    t.string   "division",      null: false
    t.string   "league_name",   null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["name"], name: "index_summoners_on_name", unique: true, using: :btree
    t.index ["summoner_id"], name: "index_summoners_on_summoner_id", unique: true, using: :btree
  end

end
