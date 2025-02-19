import { useDispatch, useSelector } from 'react-redux';
import { calendarActions } from '@/redux/calendarSlice';
import { RootState } from '@/redux/store';

const Header = () => {
  const dispatch = useDispatch();
  const { currentDate } = useSelector((state: RootState) => state.calendar);
  const currentDateObj = new Date(currentDate);

  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={() => dispatch(calendarActions.navigateMonth(-1))}
            className="p-2 sm:p-3 hover:bg-white/10 rounded-full transition-all"
          >
            ⬅️
          </button>
          <h1 className="text-lg sm:text-2xl font-bold text-white tracking-wide">
            {currentDateObj.toLocaleString('default', { 
              month: 'long', 
              year: 'numeric' 
            }).toUpperCase()}
          </h1>
          <button
            onClick={() => dispatch(calendarActions.navigateMonth(1))}
            className="p-2 sm:p-3 hover:bg-white/10 rounded-full transition-all"
          >
            ➡️
          </button>
        </div>
        <div className="text-white/60 text-xs sm:text-sm ml-12 sm:ml-0">
          {new Date().toLocaleDateString('default', { 
            weekday: 'long',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;