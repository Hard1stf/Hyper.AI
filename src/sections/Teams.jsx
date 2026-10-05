import { teamData } from '../assets/assets';
import Title from '../components/Title';

const Teams = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white">
        <Title
          title={'Meet the Team'}
          desc={
            'A passionate team of digital experts dedicated to your brands success.'
          }
        />
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {teamData.map((data, i) => (
            <div
              key={i}
              className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400"
            >
              <img
                src={data.image}
                alt={data.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-bold text-sm">{data.name}</h3>
                <p className="text-xs opacity-60">{data.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Teams;
