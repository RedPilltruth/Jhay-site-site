export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-purple-300 to-purple-600 text-gray-900 p-6 font-sans">

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center py-16">
        <h1 className="text-5xl font-extrabold mb-4 text-purple-700">Jhay's Marketing Team</h1>
        <p className="text-lg mb-6 text-gray-700">
          Analysis Based on Facts — no fluff, just results.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="rounded-2xl px-6 py-3 text-lg bg-purple-600 text-white">Get Started</a>
          <a href="#learn" className="rounded-2xl px-6 py-3 text-lg border">Learn More</a>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 py-10">
        <div className="rounded-2xl shadow-lg p-6 bg-white">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">Social Media Booster</h2>
          <p>Help barbers, restaurants, and local businesses grow by posting content, running pages, and attracting more customers.</p>
        </div>
        <div className="rounded-2xl shadow-lg p-6 bg-white">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">Marketing Analysis</h2>
          <p>We review your online presence and give you clear improvements to bring in more clients.</p>
        </div>
        <div className="rounded-2xl shadow-lg p-6 bg-white">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">Service Planner</h2>
          <p>We build content plans and strategies so you always know what to post and when.</p>
        </div>
      </div>

      {/* Learn More */}
      <div id="learn" className="max-w-4xl mx-auto py-12 bg-white/70 rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">How We Help You Grow</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Analyze your social media</li>
          <li>Create a strategy</li>
          <li>Stay consistent</li>
          <li>Bring in real customers</li>
        </ul>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Our Mission</h2>
        <p>
          We help local businesses grow using real, data-driven marketing strategies that bring in customers.
          No guessing, no fluff — just results.
        </p>
      </div>

      {/* Contact */}
      <div id="contact" className="max-w-3xl mx-auto py-12 bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Contact Me Directly</h2>
        <form action="https://formspree.io/f/xbdpaqnj" method="POST" className="grid gap-3">
          <input name="name" placeholder="Your Name" className="p-2 border rounded-xl" required />
          <input name="business" placeholder="Business Name" className="p-2 border rounded-xl" />
          <input name="phone" placeholder="Phone Number" className="p-2 border rounded-xl" />
          <textarea name="needs" placeholder="What do you need help with?" className="p-2 border rounded-xl" />
          <button type="submit" className="rounded-2xl bg-purple-600 text-white py-2">Submit</button>
        </form>
      </div>

      {/* Sponsored */}
      <div className="max-w-4xl mx-auto py-10 text-center">
        <p className="text-lg font-semibold mb-4">Sponsored by</p>
        <div className="text-2xl font-bold">Square POS</div>
      </div>

      {/* Email */}
      <div className="max-w-xl mx-auto text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Join the Team 🚀</h2>
        <p>Get Weekly tips and get notified when we Post</p>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-sm">
        © 2026 Jhay's Marketing Team
      </footer>

    </main>
  );
}
