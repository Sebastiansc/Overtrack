class MatchFetch
  include SuckerPunch::Job

  #Sets keys in cache to let model now that match fetching isn't done yet and to keep on trying
  def perform(summoner, offset = 0, limit = 20)
    $redis.set("matches_loaded", false)
    ActiveRecord::Base.connection_pool.with_connection do
      Match.fetch_matches(summoner, {
        offset: offset,
        limit: limit
      })
      $redis.set("matches_loaded", true)
   end
  end
end
