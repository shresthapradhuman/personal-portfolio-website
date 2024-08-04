"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");

  const updateQuery = useCallback(
    (keyword: string) => {
      const debouncedUpdate = debounce(() => {
        const params = new URLSearchParams(searchParams);
        if (keyword) {
          params.set("keyword", keyword);
        } else {
          params.delete("keyword");
        }
        router.push(`${pathname}?${params.toString()}`);
      }, 300);
      debouncedUpdate();
    },
    [pathname, searchParams, router]
  );

  useEffect(() => {
    updateQuery(keyword);
  }, [keyword, updateQuery]);

  return (
    <div className="relative w-2/3">
      <Input
        placeholder="Search Notes..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <SearchIcon className="absolute top-1/2 right-3 transform -translate-y-1/2" />
    </div>
  );
};

export default SearchForm;
