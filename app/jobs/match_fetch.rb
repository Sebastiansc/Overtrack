class MatchFetch
  include SuckerPunch::Job

  def perform(summoner)
    ActiveRecord::Base.connection_pool.with_connection do
      Match.fetch_matches(summoner, {
        offset: 0,
        limit: 20
      })
   end
  end
end
