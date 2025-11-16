'use client';
import { Menu } from '@/utils/dataTypes/MenuData';
import { ViewsData } from '@/utils/dataTypes/ViewsData';
import { Mouse, People, Person, StarFill } from 'react-bootstrap-icons';

export default function StatCards({ views, menus }: { views: ViewsData, menus: Menu[] }) {
  const stats = [
    {
      value: Math.round(views.data.reduce((r, a) => r + Number(a.visits), 0) / 2),
      label: "Total Pengunjung",
      icon: <Person />,
      color: 'pink',
      comparison: `+${Math.round(Number(views.data[0].visits) / 2)}`,
      isUp: true,
    },
    {
      value: Math.round(views.data[0].visits / 2),
      label: 'Produk Di Klik',
      icon: <Mouse />,
      color: 'blue',
      comparison: Math.round(Math.abs(Number(views.data[1].visits) - Number(views.data[0].visits)) / 2),
      isUp: Number(views.data[1].visits) - Number(views.data[0].visits) < 0,
    },
    {
      value: Math.round(Number((menus.length > 0 ? menus.sort((a, b) => Number(a.food.visitors) > Number(b.food.visitors) ? -1 : 1)[0].food.visitors : 0) / 2)),
      label: 'Klik pada terpopuler',
      icon: <StarFill />,
      color: 'green',
      comparison: null,
      isUp: null,
    },
    {
      value: Math.round(Number(menus.reduce((r, a) => r + Number(a.food.visitors), 0) / menus.length / 2)),
      label: 'Rata-rata pengunjung',
      icon: <People />,
      color: 'purple',
      comparison: null,
      isUp: null,

    }
  ]

  return (
    <div className="stat-cards-grid">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card modern">
          <div className={`stat-icon-wrapper ${stat.color}`}>
            <span>{stat.icon}</span>
          </div>
          <div className="stat-content">
            <label>{stat.label}</label>
            <div className="stat-value">{stat.value.toString()}</div>
            <div className={`stat-comparison ${stat.isUp ? 'positive' : 'negative'}`}>
              {stat.isUp == null ? null : stat.isUp ? '↑' : '↓'} {stat.comparison}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}