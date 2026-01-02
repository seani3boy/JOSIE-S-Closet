import { useMemo } from 'react';
import { Card, CardContent } from '../components/ui/card';

const wisdomQuotes = [
  'Anonymous wisdom: storms still water the garden you need tomorrow.',
  'Anonymous wisdom: every small kindness you repeat becomes your shelter.',
  'Anonymous wisdom: joy grows when you notice what already shines.',
  'Anonymous wisdom: patience is the umbrella that keeps your spirit warm.',
  'Anonymous wisdom: gratitude is the compass that points to calm seas.',
];

const recentComments = [
  {
    id: 1,
    name: 'Maya',
    time: '2 minutes ago',
    comment: 'Today felt heavy, but the ocean breeze reminded me to breathe.',
    likes: 42,
    shares: 9,
    medals: ['Most Liked'],
  },
  {
    id: 2,
    name: 'Ari',
    time: '10 minutes ago',
    comment: 'The rain was gentle, like a reset button for my thoughts.',
    likes: 26,
    shares: 14,
    medals: ['Most Shared'],
  },
  {
    id: 3,
    name: 'Lena',
    time: '25 minutes ago',
    comment: 'I made a negative comment earlier—learning to pause before posting.',
    likes: 4,
    shares: 1,
    downLikes: 6,
  },
  {
    id: 4,
    name: 'Sol',
    time: '45 minutes ago',
    comment: 'Sunshine after rain feels like proof that things can turn around.',
    likes: 18,
    shares: 3,
  },
];

const topLikedComments = [...recentComments].sort((a, b) => (b.likes || 0) - (a.likes || 0)).slice(0, 3);

const badgeStyles = {
  'Most Liked': 'bg-rose-500/90 text-white',
  'Most Shared': 'bg-sky-500/90 text-white',
};

const Home = () => {
  const featuredQuote = useMemo(() => wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)], []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-sky-100 to-emerald-100 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <header className="flex flex-col gap-6 rounded-3xl bg-white/70 p-8 shadow-lg backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-inner">
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 via-red-500 to-rose-600 text-white">
                  <span className="text-2xl">❤</span>
                  <span className="text-[10px] font-bold italic" style={{ fontFamily: 'cursive' }}>
                    LML
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">LoveMyLife</p>
                <h1 className="text-3xl font-semibold text-slate-800">Sunny Rain Conversations</h1>
              </div>
            </div>
            <div className="rounded-2xl bg-amber-100/80 px-4 py-3 text-sm text-amber-900 shadow">
              Comments reset every Monday to keep the space fresh and uplifting.
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-sky-200/70 via-emerald-100/80 to-yellow-100/80 px-6 py-4 text-lg italic text-slate-700 shadow-inner">
            “{featuredQuote}”
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <span className="rounded-full bg-white/70 px-4 py-2 shadow">🌞 Sunny warmth</span>
            <span className="rounded-full bg-white/70 px-4 py-2 shadow">🌧️ Gentle rain</span>
            <span className="rounded-full bg-white/70 px-4 py-2 shadow">🏝️ Tropical ocean breeze</span>
            <span className="rounded-full bg-white/70 px-4 py-2 shadow">🏖️ White sand calm</span>
          </div>
        </header>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-slate-800">Most Recent Conversations</h2>
            {recentComments.map((comment) => (
              <Card key={comment.id}>
                <CardContent>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">{comment.name}</h3>
                      <p className="text-sm text-slate-500">{comment.time}</p>
                    </div>
                    {comment.medals && (
                      <div className="flex flex-wrap gap-2">
                        {comment.medals.map((medal) => (
                          <span
                            key={medal}
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[medal]}`}
                          >
                            🏅 {medal}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="mt-4 text-slate-700">{comment.comment}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                    <span>❤️ {comment.likes} likes</span>
                    <span>🔁 {comment.shares} shares</span>
                    <span className={comment.downLikes ? 'text-rose-600' : ''}>
                      👎 {comment.downLikes || 0} down likes
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <aside className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-slate-800">Top Liked Comments</h2>
            {topLikedComments.map((comment, index) => (
              <Card key={comment.id}>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-800">
                      #{index + 1} {comment.name}
                    </h3>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      🏆 {comment.likes} likes
                    </span>
                  </div>
                  <p className="mt-3 text-slate-700">{comment.comment}</p>
                  <div className="mt-3 text-sm text-slate-600">🔁 {comment.shares} shares</div>
                </CardContent>
              </Card>
            ))}

            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold text-slate-800">Medal Guide</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>🏅 Most Liked: awarded to the community favorite.</li>
                  <li>🏅 Most Shared: celebrates the most uplifting share.</li>
                  <li>👎 Down likes: gently flag comments that feel negative.</li>
                </ul>
              </CardContent>
            </Card>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default Home;
