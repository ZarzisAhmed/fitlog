import IWorkout from "@/app/types/WorkoutType";
import Image from "next/image";

export interface WorkoutDetailsCardProps {
  id: string;
}
const getWorkoutLibrary = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

export default async function WorkoutDetailsCard({
  id,
}: WorkoutDetailsCardProps) {
  const workouts = await getWorkoutLibrary();
  const workout: IWorkout = workouts.find(
    (work: IWorkout) => String(id) === String(work.id),
  );
  return (
    <>
      <div className="container mx-auto px-10 sm:px-5 md:px-0">
        <div className="mt-6 card card-top  shadow-sm lg:card-side">
          <figure>
            <Image
              src={`${workout.image}`}
              width={200}
              height={1}
              alt="Image"
              className="w-full"
            ></Image>
          </figure>
          <div className="card-body space-y-4">
            <h2 className="text-3xl font-extrabold font-stretch-60%">
              {workout.name}
            </h2>
            <p className="text-[#9CA3AF]">{workout.description}</p>
            <div className="flex gap-2">
              {workout.muscleGroups.map((work: string, ind: number) => (
                <div
                  key={ind}
                  className="badge bg-[#CCFF00] text-black font-bold"
                >
                  {work}
                </div>
              ))}
            </div>
            <div>
              <table
                border={1}
                className=" bg-base-100 w-full text-lg rounded-2xl "
              >
                <tbody>
                  <tr className="border-b border-gray-500">
                    <td className="text-gray-400 font-bold py-3 px-3">
                      Equipment
                    </td>
                    <td className="text-right px-3">{workout.equipment}</td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="text-gray-400 font-bold py-3 px-3">
                      Difficulty
                    </td>
                    <td className="text-right px-3">{workout.difficulty}</td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="text-gray-400 font-bold py-3 px-3">Sets</td>
                    <td className="text-right px-3">{workout.sets}</td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="text-gray-400 font-bold py-3 px-3">Reps</td>
                    <td className="text-right px-3">{workout.reps}</td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="text-gray-400 font-bold py-3 px-3">
                      Duration
                    </td>
                    <td className="text-right px-3">{workout.duration}</td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="text-gray-400 font-bold py-3 px-3">
                      Calories
                    </td>
                    <td className="text-right px-3">
                      {workout.caloriesBurned}
                    </td>
                  </tr>
                  <tr className=" border-gray-500">
                    <td className="text-gray-400 font-bold py-3 px-3">
                      Rating
                    </td>
                    <td className="text-right px-3">{workout.rating}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
