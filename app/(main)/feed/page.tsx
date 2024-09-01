"use client";

import { useState, useMemo, Suspense } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import AlumniList from "@/components/main/feed/AlumniList";
import { FilterIcon } from "@/components/SVGs";
import { alumniData } from "@/data/Alumnus";

function FilterDropdown({
  label,
  filterType,
  filters,
  setFilters,
}: {
  label: string;
  filterType: keyof {
    batchYear: number[];
    stream: string[];
    occupation: string[];
  };
  filters: { batchYear: number[]; stream: string[]; occupation: string[] };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      batchYear: number[];
      stream: string[];
      occupation: string[];
    }>
  >;
}) {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckChange = (checked: boolean, value: number | string) => {
    if (checked) {
      setCheckedItems([...checkedItems, value as string]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: checked
        ? [...prevFilters[filterType], value]
        : prevFilters[filterType].filter((item) => item !== value),
    }));
  };

  const filterOptions =
    filterType === "batchYear"
      ? [2015, 2018, 2020]
      : filterType === "stream"
        ? [
            "Computer Science",
            "Business Administration",
            "Mechanical Engineering",
          ]
        : filterType === "occupation"
          ? ["Software Engineer", "Marketing Manager", "Product Designer"]
          : [];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <FilterIcon className="mr-2 h-4 w-4" />
          {label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        {filterOptions.map((option) => (
          <DropdownMenuCheckboxItem
            key={option}
            checked={checkedItems.includes(option as string)}
            onCheckedChange={(checked) => handleCheckChange(checked, option)}
          >
            {option}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    batchYear: [] as number[],
    stream: [] as string[],
    occupation: [] as string[],
  });
  const currentPage = 1;
  const itemsPerPage = 8;

  const filteredAlumni = useMemo(() => {
    return alumniData
      .filter((alumnus) => {
        const { batchYear, stream, occupation } = filters;
        return (
          (batchYear.length === 0 || batchYear.includes(alumnus.batchYear)) &&
          (stream.length === 0 || stream.includes(alumnus.stream)) &&
          (occupation.length === 0 ||
            occupation.includes(alumnus.occupation.title))
        );
      })
      .filter((alumnus) =>
        alumnus.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
  }, [alumniData, filters, searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Alumni Profiles</h1>
        <p className="text-muted-foreground">
          Explore the stories and experiences of our esteemed alumni.
        </p>
      </div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex-1">
          <Input
            placeholder="Search alumni..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <FilterDropdown
            label="Batch Year"
            filterType="batchYear"
            filters={filters}
            setFilters={setFilters}
          />
          <FilterDropdown
            label="Stream"
            filterType="stream"
            filters={filters}
            setFilters={setFilters}
          />
          <FilterDropdown
            label="Occupation"
            filterType="occupation"
            filters={filters}
            setFilters={setFilters}
          />
        </div>
      </div>
      <Suspense fallback={<div className="flex justify-center">Loading...</div>}>
        <AlumniList
          alumni={filteredAlumni}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </Suspense>
    </div>
  );
}
