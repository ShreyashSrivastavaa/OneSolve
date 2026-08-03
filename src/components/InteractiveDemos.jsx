import React, { useState } from 'react';
import { Box, Bot, Workflow, BarChart3, RotateCw, Send, CheckCircle2, Play, Sparkles, RefreshCw } from 'lucide-react';
import ThreePlayground from './ThreePlayground';

export default function InteractiveDemos() {
  const [activeTab, setActiveTab] = useState('chatbot');

  // AI Chatbot Demo State
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: 'Hello! I am OneSolve AI Assistant. How can I help transform your tech stack today?' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const samplePrompts = [
    'What AI solutions do you build?',
    'How fast can you launch a Next.js app?',
    'Tell me about your 3D WebGL work.',
  ];

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    const newMessages = [...chatMessages, { sender: 'user', text: query }];
    setChatMessages(newMessages);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      let aiResponse = "We build custom LLMs, RAG knowledge retrieval agents, and automated n8n pipelines tailored to your enterprise goals!";
      const q = query.toLowerCase();
      if (q.includes('fast') || q.includes('next.js') || q.includes('launch')) {
        aiResponse = "We deploy production-grade Next.js & React web applications in 2-4 weeks with Lighthouse 95+ performance scores and CI/CD pipelines.";
      } else if (q.includes('3d') || q.includes('webgl') || q.includes('work')) {
        aiResponse = "Our 3D WebGL lab crafts interactive Three.js product viewports, particle canvas animations, and low-poly 3D models.";
      } else if (q.includes('price') || q.includes('cost') || q.includes('budget')) {
        aiResponse = "Project budgets start at $5,000 for web apps & automation suites up to $50,000+ for enterprise multi-agent platforms.";
      }

      setChatMessages([...newMessages, { sender: 'ai', text: aiResponse }]);
      setIsTyping(false);
    }, 900);
  };

  // Workflow Diagram Active Node
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(1);

  return (
    <section
      id="demos"
      className="section-padding"
      style={{
        position: 'relative',
        zIndex: 1,
        background: 'linear-gradient(180deg, rgba(7, 9, 14, 0.95) 0%, rgba(15, 20, 34, 0.9) 100%)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} />
            <span>SEE IT IN ACTION</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '20px' }}>
            Interactive <span className="gradient-text-pink">Capability Demos</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Test-drive real live snippets of our 3D viewports, conversational AI agents, automation node graphs, and analytics dashboards.
          </p>
        </div>

        {/* Demo Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          <button
            onClick={() => setActiveTab('chatbot')}
            style={{
              padding: '12px 24px',
              borderRadius: '30px',
              border: activeTab === 'chatbot' ? '1px solid var(--accent-pink)' : '1px solid rgba(255, 255, 255, 0.1)',
              background: activeTab === 'chatbot' ? 'rgba(255, 0, 110, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'chatbot' ? 'var(--accent-pink)' : 'var(--text-muted)',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'var(--transition-smooth)',
            }}
          >
            <Bot size={18} />
            <span>1. AI Agent Chatbot Demo</span>
          </button>

          <button
            onClick={() => setActiveTab('3d')}
            style={{
              padding: '12px 24px',
              borderRadius: '30px',
              border: activeTab === '3d' ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
              background: activeTab === '3d' ? 'rgba(0, 217, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === '3d' ? 'var(--accent-cyan)' : 'var(--text-muted)',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'var(--transition-smooth)',
            }}
          >
            <Box size={18} />
            <span>2. 3D WebGL Canvas</span>
          </button>

          <button
            onClick={() => setActiveTab('workflow')}
            style={{
              padding: '12px 24px',
              borderRadius: '30px',
              border: activeTab === 'workflow' ? '1px solid var(--accent-purple)' : '1px solid rgba(255, 255, 255, 0.1)',
              background: activeTab === 'workflow' ? 'rgba(157, 78, 221, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'workflow' ? '#9d4edd' : 'var(--text-muted)',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'var(--transition-smooth)',
            }}
          >
            <Workflow size={18} />
            <span>3. Automation Workflow Diagram</span>
          </button>

          <button
            onClick={() => setActiveTab('dashboard')}
            style={{
              padding: '12px 24px',
              borderRadius: '30px',
              border: activeTab === 'dashboard' ? '1px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.1)',
              background: activeTab === 'dashboard' ? 'rgba(255, 183, 3, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'dashboard' ? 'var(--accent-gold)' : 'var(--text-muted)',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'var(--transition-smooth)',
            }}
          >
            <BarChart3 size={18} />
            <span>4. Analytics Dashboard Snippet</span>
          </button>
        </div>

        {/* Demo Content Box */}
        <div
          className="glass-card"
          style={{
            minHeight: '480px',
            padding: '30px',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* TAB 1: AI CHATBOT */}
          {activeTab === 'chatbot' && (
            <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', height: '420px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255, 0, 110, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff006e' }}>
                    <Bot size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: '#fff' }}>OneSolve AI Agent</div>
                    <div style={{ fontSize: '0.72rem', color: '#10b981' }}>● Online • Claude 3.5 Sonnet RAG Enabled</div>
                  </div>
                </div>
                <button
                  onClick={() => setChatMessages([{ sender: 'ai', text: 'Hello! I am OneSolve AI Assistant. How can I help transform your tech stack today?' }])}
                  style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}
                  title="Reset Chat"
                >
                  <RefreshCw size={16} />
                </button>
              </div>

              {/* Chat Message List */}
              <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingRight: '6px' }}>
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    style={{
                      alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                      maxWidth: '80%',
                      padding: '12px 16px',
                      borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                      background: msg.sender === 'user' ? 'linear-gradient(135deg, #00d9ff, #0088ff)' : 'rgba(255, 255, 255, 0.06)',
                      color: msg.sender === 'user' ? '#000' : '#fff',
                      fontWeight: msg.sender === 'user' ? 600 : 400,
                      fontSize: '0.92rem',
                    }}
                  >
                    {msg.text}
                  </div>
                ))}

                {isTyping && (
                  <div style={{ alignSelf: 'flex-start', padding: '10px 16px', borderRadius: '18px', background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    OneSolve AI is thinking...
                  </div>
                )}
              </div>

              {/* Sample Quick Prompts */}
              <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '12px 0 8px 0' }}>
                {samplePrompts.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(p)}
                    style={{
                      whiteSpace: 'nowrap',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--accent-cyan)',
                      cursor: 'pointer',
                    }}
                  >
                    💡 {p}
                  </button>
                ))}
              </div>

              {/* Input Row */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                style={{ display: 'flex', gap: '10px' }}
              >
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask OneSolve AI about services, pricing, or tech stack..."
                  style={{
                    flex: 1,
                    padding: '12px 18px',
                    borderRadius: '30px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem',
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ borderRadius: '50%', width: '46px', height: '46px', padding: 0, justifyContent: 'center' }}
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          )}

          {/* TAB 2: 3D WEBGL LAB */}
          {activeTab === '3d' && (
            <div style={{ position: 'relative', height: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 10, background: 'rgba(0, 0, 0, 0.6)', padding: '8px 16px', borderRadius: '12px', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  🎮 Click and drag mouse to rotate 3D Mesh in real-time
                </span>
              </div>
              <ThreePlayground />
            </div>
          )}

          {/* TAB 3: WORKFLOW AUTOMATION DIAGRAM */}
          {activeTab === 'workflow' && (
            <div style={{ textAlign: 'center', height: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '24px' }}>
                Automated Lead Capture to CRM & AI Dispatch Engine
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  maxWidth: '900px',
                  margin: '0 auto',
                }}
              >
                {/* Node 1 */}
                <div
                  onClick={() => setActiveWorkflowStep(1)}
                  style={{
                    padding: '20px',
                    borderRadius: '16px',
                    background: activeWorkflowStep === 1 ? 'rgba(0, 217, 255, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: activeWorkflowStep === 1 ? '2px solid var(--accent-cyan)' : '1px solid rgba(255,255,255,0.1)',
                    width: '180px',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🌐</div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>1. Web Form</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Lead Submits Request</div>
                </div>

                <div style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem', fontWeight: 900 }}>➔</div>

                {/* Node 2 */}
                <div
                  onClick={() => setActiveWorkflowStep(2)}
                  style={{
                    padding: '20px',
                    borderRadius: '16px',
                    background: activeWorkflowStep === 2 ? 'rgba(255, 0, 110, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: activeWorkflowStep === 2 ? '2px solid var(--accent-pink)' : '1px solid rgba(255,255,255,0.1)',
                    width: '180px',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>⚡</div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>2. n8n / Webhook</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Trigger Automation</div>
                </div>

                <div style={{ color: 'var(--accent-pink)', fontSize: '1.5rem', fontWeight: 900 }}>➔</div>

                {/* Node 3 */}
                <div
                  onClick={() => setActiveWorkflowStep(3)}
                  style={{
                    padding: '20px',
                    borderRadius: '16px',
                    background: activeWorkflowStep === 3 ? 'rgba(157, 78, 221, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: activeWorkflowStep === 3 ? '2px solid #9d4edd' : '1px solid rgba(255,255,255,0.1)',
                    width: '180px',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🤖</div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>3. Claude AI RAG</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Qualify & Score Lead</div>
                </div>

                <div style={{ color: '#9d4edd', fontSize: '1.5rem', fontWeight: 900 }}>➔</div>

                {/* Node 4 */}
                <div
                  onClick={() => setActiveWorkflowStep(4)}
                  style={{
                    padding: '20px',
                    borderRadius: '16px',
                    background: activeWorkflowStep === 4 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: activeWorkflowStep === 4 ? '2px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
                    width: '180px',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>📊</div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>4. HubSpot & Slack</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Notify Team Instantly</div>
                </div>
              </div>

              {/* Details of active node */}
              <div style={{ marginTop: '30px', padding: '16px', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '12px', maxWidth: '600px', margin: '30px auto 0 auto' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  Active Node Status: {activeWorkflowStep === 1 ? 'Form submission validated with reCAPTCHA' : activeWorkflowStep === 2 ? 'JSON Webhook payload dispatched to n8n container' : activeWorkflowStep === 3 ? 'AI analyzes budget & scope against enterprise qualification criteria' : 'Deal created in CRM and notification sent to #sales Slack channel'}
                </span>
              </div>
            </div>
          )}

          {/* TAB 4: LIVE DASHBOARD SNIPPET */}
          {activeTab === 'dashboard' && (
            <div style={{ height: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(0, 217, 255, 0.08)', border: '1px solid rgba(0, 217, 255, 0.2)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Monthly Recurring Revenue</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginTop: '6px' }}>$148,500</div>
                  <div style={{ fontSize: '0.78rem', color: '#10b981', marginTop: '4px' }}>▲ +24.8% vs last month</div>
                </div>

                <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(255, 0, 110, 0.08)', border: '1px solid rgba(255, 0, 110, 0.2)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>AI Tasks Completed</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginTop: '6px' }}>1,240,890</div>
                  <div style={{ fontSize: '0.78rem', color: '#10b981', marginTop: '4px' }}>▲ +112% automation efficiency</div>
                </div>

                <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Avg API Latency</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginTop: '6px' }}>42 ms</div>
                  <div style={{ fontSize: '0.78rem', color: '#10b981', marginTop: '4px' }}>⚡ Lighthouse 99 Score</div>
                </div>
              </div>

              {/* Simulated Chart Bar graphic */}
              <div style={{ background: 'rgba(0, 0, 0, 0.4)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <span>System Performance Metrics (Last 7 Days)</span>
                  <span style={{ color: 'var(--accent-cyan)' }}>Real-Time Stream Live</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '120px' }}>
                  {[45, 65, 80, 55, 90, 85, 100].map((h, idx) => (
                    <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                      <div
                        style={{
                          width: '100%',
                          height: `${h}%`,
                          background: 'linear-gradient(180deg, var(--accent-cyan) 0%, rgba(0, 217, 255, 0.2) 100%)',
                          borderRadius: '6px 6px 0 0',
                          transition: 'height 0.5s ease',
                        }}
                      />
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>Day {idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
