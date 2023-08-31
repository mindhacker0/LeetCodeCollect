#include <stdio.h>
#include <math.h>

#define EPSILON 1.0e-10

void swap(double* a, double* b) {
    double temp = *a;
    *a = *b;
    *b = temp;
}

void tridiagonal(double* a, double* d, double* e, int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            double f = (a[j + 1 + i * n] - a[j + i * n]) / (e[j] * 2.0);
            e[j] = e[j] * sqrt(1 + f * f);
            if (f < 0) {
                swap(&a[j + i * n], &a[j + 1 + i * n]);
                swap(&e[j], &e[j + 1]);
            } else {
                d[j + 1] = d[j] + sqrt(a[j + i * n] * a[j + i * n] - e[j] * e[j]);
            }
        }
    }
    d[n - 1] = sqrt(a[n - 1] * a[n - 1] - e[n - 2] * e[n - 2]);
}

void jacobi(double* a, double* d, double* x, int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (i != j) {
                double g = (a[i * n + j] - d[i]) / (d[i] * d[j]);
                double f = cos(g);
                if (fabs(f) + EPSILON < 1) {
                    x[i] = f;
                } else {
                    double t = sqrt(1 - f * f);
                    x[i] = t;
                    x[j] = g / t;
                }
            } else {
                x[i] = 1;
            }
        }
    }
}

void qr(double* a, double* d, double* x, int n) {
    for (int k = 0; k < n - 1; k++) {
        for (int j = k + 1; j < n; j++) {
            double f = a[k + j * n];
            for (int i = k + 1; i < n; i++) {
                f = f * x[i] + a[i + j * n];
            }
            double t = x[k] / f;
            x[k] = t;
            for (int i = k + 1; i < n; i++) {
                x[i] = x[i] - t * a[i + j * n];
            }
        }
        d[k] = sqrt(x[k] * x[k] + a[k + k * n]);
        for (int i = k + 1; i < n; i++) {
            x[i] /= d[k];
        }
    }
}