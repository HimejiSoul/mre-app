'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Button } from './ui/button';

export default function Pagination({ table }: any) {
  const currentPage = table.getState().pagination.pageIndex;
  const totalPages = table.getPageCount();
  const getPaginationGroup = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 2) {
      return [1, 2, 3, '...', totalPages];
    }

    if (currentPage >= totalPages - 1) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage, '...', totalPages];
  };

  const paginationGroup = getPaginationGroup();

  return (
    <div className="flex justify-center space-x-3">
      <Button
        variant="default"
        size="default"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <ArrowLeftIcon className="w-4" />
      </Button>
      <div className="flex gap-1">
        {paginationGroup.map((page: any, index) =>
          page === '...' ? (
            <span key={index} className="ellipsis">
              ...
            </span>
          ) : (
            <Button
              key={index}
              variant="default"
              size="default"
              onClick={() => table.setPageIndex(page - 1)}
              disabled={currentPage === page - 1}
            >
              {page}
            </Button>
          ),
        )}
      </div>

      <Button
        variant="default"
        size="default"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <ArrowRightIcon className="w-4" />
      </Button>
    </div>
  );
}
