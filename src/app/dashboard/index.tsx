import React, { useEffect, useState, type JSX } from 'react';

type Stat = {
    id: string;
    label: string;
    value: number | string;
    delta?: string;
};

type Activity = {
    id: string;
    text: string;
    time: string;
};

const mockStats: Stat[] = [
  { id: 'students', label: 'Students', value: 1248, delta: '+2.3%' },
  { id: 'staff', label: 'Staff', value: 128, delta: '+0.5%' },
  { id: 'courses', label: 'Courses', value: 86, delta: '-0.2%' },
  { id: 'departments', label: 'Departments', value: 12 },
];

const mockActivities: Activity[] = [
  { id: 'a1', text: 'New student registered: Jane Doe', time: '2h ago' },
  { id: 'a2', text: "Course 'Calculus I' updated", time: '6h ago' },
  { id: 'a3', text: 'Department meeting scheduled', time: '1d ago' },
];

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => {
  return (
    <div style={styles.statCard}>
      <div style={styles.statLabel}>{stat.label}</div>
      <div style={styles.statValue}>{stat.value}</div>
      {stat.delta && <div style={styles.statDelta}>{stat.delta}</div>}
    </div>
  );
};

const SimpleBarChart: React.FC<{ values: number[]; labels?: string[] }> = ({
  values,
  labels,
}) => {
  const max = Math.max(...values, 1);
  return (
    <div style={styles.chart}>
      {values.map((v, i) => (
        <div key={i} style={styles.barColumn}>
          <div
            style={{
              ...styles.bar,
              height: `${(v / max) * 100}%`,
            }}
            title={`${labels?.[i] ?? i}: ${v}`}
          />
          <div style={styles.barLabel}>{labels?.[i] ?? i + 1}</div>
        </div>
      ))}
    </div>
  );
};

export default function DashboardPage(): JSX.Element {
  const [stats, setStats] = useState<Stat[]>([]);   
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // Replace with real API calls
    setStats(mockStats);
    setActivities(mockActivities);
  }, []);

  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <h1 style={{ margin: 0 }}>Dashboard</h1>
        <div style={styles.headerMeta}>Overview of university metrics</div>
      </header>

      <section style={styles.grid}>
        <div style={styles.statsRow}>
          {stats.map((s) => (
            <StatCard key={s.id} stat={s} />
          ))}
        </div>

        <div style={styles.mainArea}>
          <section style={styles.panel}>
            <h2 style={styles.panelTitle}>Enrollment trend</h2>
            <SimpleBarChart
              values={[900, 1020, 1120, 1180, 1248]}
              labels={['2019', '2020', '2021', '2022', '2023']}
            />
          </section>

          <section style={styles.panel}>
            <h2 style={styles.panelTitle}>Active courses</h2>
            <ul style={styles.list}>
              <li>Introduction to Programming — 120 students</li>
              <li>Calculus I — 80 students</li>
              <li>Linear Algebra — 60 students</li>
              <li>Operating Systems — 45 students</li>
            </ul>
          </section>
        </div>

        <aside style={styles.sideArea}>
          <section style={styles.panel}>
            <h3 style={styles.panelTitle}>Recent activity</h3>
            <ul style={styles.activityList}>
              {activities.map((a) => (
                <li key={a.id} style={styles.activityItem}>
                  <div style={styles.activityText}>{a.text}</div>
                  <div style={styles.activityTime}>{a.time}</div>
                </li>
              ))}
            </ul>
          </section>

          <section style={styles.panel}>
            <h3 style={styles.panelTitle}>Quick actions</h3>
            <div style={styles.actions}>
              <button style={styles.button}>Add student</button>
              <button style={styles.button}>Create course</button>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  container: {
    padding: 20,
    fontFamily: "Inter, Roboto, system-ui, -apple-system, 'Segoe UI', sans-serif",
    color: '#111827',
  },
  header: {
    marginBottom: 20,
  },
  headerMeta: {
    color: '#6b7280',
    marginTop: 6,
  },
  grid: {
    display: 'flex',
    gap: 20,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  statsRow: {
    display: 'flex',
    gap: 12,
    flex: '1 1 100%',
    flexWrap: 'wrap',
  },
  statCard: {
    minWidth: 160,
    padding: 16,
    borderRadius: 8,
    background: '#fff',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    border: '1px solid #e6e9ef',
  },
  statLabel: {
    fontSize: 13,
    color: '#6b7280',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 600,
    marginTop: 6,
  },
  statDelta: {
    marginTop: 8,
    fontSize: 12,
    color: '#10b981',
  },
  mainArea: {
    flex: '1 1 60%',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    minWidth: 320,
  },
  sideArea: {
    flex: '0 0 320px',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    minWidth: 260,
  },
  panel: {
    padding: 16,
    borderRadius: 8,
    background: '#fff',
    border: '1px solid #e6e9ef',
    boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
  },
  panelTitle: {
    margin: '0 0 12px 0',
    fontSize: 16,
  },
  chart: {
    display: 'flex',
    alignItems: 'end',
    height: 140,
    gap: 12,
    padding: '8px 0',
  },
  barColumn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  bar: {
    width: '100%',
    maxWidth: 36,
    background: 'linear-gradient(180deg,#3b82f6,#60a5fa)',
    borderRadius: 6,
    transition: 'height 300ms ease',
  },
  barLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  list: {
    margin: 0,
    paddingLeft: 16,
  },
  activityList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  activityItem: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 12,
    alignItems: 'center',
  },
  activityText: {
    color: '#111827',
  },
  activityTime: {
    fontSize: 12,
    color: '#6b7280',
  },
  actions: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
  },
  button: {
    padding: '8px 12px',
    borderRadius: 6,
    border: '1px solid #d1d5db',
    background: '#fff',
    cursor: 'pointer',
  },
};