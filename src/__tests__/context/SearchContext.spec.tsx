import { waitFor } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { SearchProvider, useSearch } from '../../context/SearchContext';
import { mockAnimal } from '../../__mocks__/animal.mock';

jest.mock('../../utils/getTimeOutSimulateApi');

describe('SearchContext Context', () => {
  describe('should be able to passed in all tests on handleFindSeach function', () => {
    it('should be able find search with success', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useSearch(), {
        wrapper: SearchProvider,
      });

      act(() => {
        result.current.handleFindSeach('dog');
      });

      waitForNextUpdate();

      expect(result.current.error).toBe(false);
    });

    it('should be able return error when search not exist animals', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useSearch(), {
        wrapper: SearchProvider,
      });

      act(() => {
        result.current.handleFindSeach('monkey');
      });

      await waitForNextUpdate();

      expect(result.current.error).toBe(true);
    });
  });
  describe('should be able to passed in all tests on handleSetItemSelected function', () => {
    it('should be able save animal when selected', async () => {
      const { result } = renderHook(() => useSearch(), {
        wrapper: SearchProvider,
      });

      act(() => {
        result.current.handleSetItemSelected(mockAnimal);
      });

      await waitFor(() => {
        expect(result.current.animalSelected).toBe(mockAnimal);
      });
    });
  });
  describe('should be able to passed in all tests on handleClearInputValue function', () => {
    it('should be able clear input search value when called', async () => {
      const { result } = renderHook(() => useSearch(), {
        wrapper: SearchProvider,
      });

      act(() => {
        result.current.handleClearInputValue();
      });

      await waitFor(() => {
        expect(result.current.search).toBe('');
      });
    });
  });
  describe('should be able to passed in all tests on handleSetEmptyInputValue function', () => {
    it('should be able set value on input search value when called', async () => {
      const { result } = renderHook(() => useSearch(), {
        wrapper: SearchProvider,
      });

      act(() => {
        result.current.handleSetEmptyInputValue(true);
      });

      await waitFor(() => {
        expect(result.current.inputIsEmpty).toBe(true);
      });
    });
  });
  describe('should be able to passed in all tests on handleSetShowCard function', () => {
    it('should be able set show on card when called', async () => {
      const { result } = renderHook(() => useSearch(), {
        wrapper: SearchProvider,
      });

      act(() => {
        result.current.handleSetShowCard();
      });

      await waitFor(() => {
        expect(result.current.showCard).toBe(true);
      });
    });
  });
  describe('should be able to passed in all tests on handleSetClearCard function', () => {
    it('should be able set clear on card when called', async () => {
      const { result } = renderHook(() => useSearch(), {
        wrapper: SearchProvider,
      });

      act(() => {
        result.current.handleSetClearCard();
      });

      await waitFor(() => {
        expect(result.current.showCard).toBe(false);
      });
    });
  });
  describe('should be able to passed in all tests on handleSetVisibiltyModalOptions function', () => {
    it('should be able set visible on ModalOptions when called', async () => {
      const { result } = renderHook(() => useSearch(), {
        wrapper: SearchProvider,
      });

      act(() => {
        result.current.handleSetVisibiltyModalOptions(true);
      });

      await waitFor(() => {
        expect(result.current.visibilityModalOptions).toBe(true);
      });
    });
  });
  describe('should be able to passed in all tests on handleSetVisibiltyModalSearch function', () => {
    it('should be able visible on ModalSearch when called', async () => {
      const { result } = renderHook(() => useSearch(), {
        wrapper: SearchProvider,
      });

      act(() => {
        result.current.handleSetVisibiltyModalSearch(true);
      });

      await waitFor(() => {
        expect(result.current.visibilityModalSearch).toBe(true);
      });
    });
  });
});
