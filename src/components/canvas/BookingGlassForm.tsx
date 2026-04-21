'use client';

import { Html } from '@react-three/drei';
import { useStore } from '@/store/useStore';
import styles from './BookingGlassForm.module.css';

export default function BookingGlassForm() {
  const isBookingOpen = useStore((state) => state.isBookingOpen);
  const setIsBookingOpen = useStore((state) => state.setIsBookingOpen);
  const bookingData = useStore((state) => state.bookingData);
  const setBookingData = useStore((state) => state.setBookingData);

  if (!isBookingOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, logic for "Confirmation Realm" transition would trigger here
    console.log("Booking Submitted:", bookingData);
  };

  return (
    <group position={[5, 1, 0.5]}>
      <Html transform distanceFactor={3} portal={{ current: document.body }}>
        <div className={styles.container}>
          <div className={styles.glassPanel}>
            <button 
              className={styles.closeButton} 
              onClick={() => setIsBookingOpen(false)}
            >
              ×
            </button>
            <h2 className={styles.title}>Secure a Moment</h2>
            
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label>The Date</label>
                <input 
                  type="date" 
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ date: e.target.value })}
                  className="interactive"
                  required
                />
              </div>

              <div className={styles.field}>
                <label>With Others</label>
                <div className={styles.guestSelector}>
                  {[1, 2, 4, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      className={`${styles.guestButton} ${bookingData.guests === num ? styles.active : ''} interactive`}
                      onClick={() => setBookingData({ guests: num })}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.field}>
                <label>Your Name</label>
                <input 
                  type="text" 
                  placeholder="L'Identité"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ name: e.target.value })}
                  className="interactive"
                  required
                />
              </div>

              <button type="submit" className={`${styles.submitButton} interactive`}>
                Enter the Void
              </button>
            </form>
          </div>
        </div>
      </Html>
    </group>
  );
}
