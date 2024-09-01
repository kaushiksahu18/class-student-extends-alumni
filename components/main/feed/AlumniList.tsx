import { Alumnus } from "@/data/Alumnus";
import AlumnusCard from "./AlumnusCard";

function AlumniList({
    alumni,
    currentPage,
    itemsPerPage,
  }: {
    alumni: Alumnus[];
    currentPage: number;
    itemsPerPage: number;
  }) {

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = alumni.slice(indexOfFirstItem, indexOfLastItem);
  
    return (
      <div className="grid grid-cols-1 gap-8">
        {currentItems.map((alumnus) => (
          <AlumnusCard key={alumnus.id} alumnus={alumnus} />
        ))}
      </div>
    );
  }

  export default AlumniList;