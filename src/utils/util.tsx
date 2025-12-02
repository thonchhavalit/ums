const DualLabel = ({ kh, en }: { kh: string; en: string }) => (
  <div style={{ lineHeight: '20px' }}>
    <div style={{ fontSize: 14 }}>{kh}</div>
    <div style={{ fontSize: 14, color: '#666' }}>{en}</div>
  </div>
);

export default DualLabel;
